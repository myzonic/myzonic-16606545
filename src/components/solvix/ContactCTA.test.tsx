import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ContactCTA from "./ContactCTA";

const mocks = vi.hoisted(() => ({
  fetch: vi.fn(),
  success: vi.fn(),
  error: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: { success: mocks.success, error: mocks.error },
}));

const fillRequiredFields = () => {
  fireEvent.change(screen.getByPlaceholderText("Jane Cooper"), {
    target: { value: "Test Person" },
  });
  fireEvent.change(screen.getByPlaceholderText("jane@brand.com"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("+1 224 555 0123"), {
    target: { value: "+1 224 555 0199" },
  });
  fireEvent.change(screen.getByRole("combobox", { name: /service interested in/i }), {
    target: { value: "Web / App" },
  });
  fireEvent.change(
    screen.getByPlaceholderText(
      "Goals, timelines, links - whatever helps us understand the brief.",
    ),
    { target: { value: "Please test this inquiry." } },
  );
};

describe("ContactCTA", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal("fetch", mocks.fetch);
  });

  it("sends the form details and resets after successful delivery", async () => {
    mocks.fetch.mockResolvedValue({ ok: true });
    render(<ContactCTA />);
    fillRequiredFields();

    fireEvent.click(screen.getByRole("button", { name: /send brief/i }));

    await waitFor(() => expect(mocks.fetch).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining('"email":"test@example.com"'),
      }),
    ));
    expect(mocks.success).toHaveBeenCalledOnce();
    expect(screen.getByPlaceholderText("Jane Cooper")).toHaveValue("");
  });

  it("keeps the form contents and displays an error when delivery fails", async () => {
    mocks.fetch.mockResolvedValue({ ok: false });
    render(<ContactCTA />);
    fillRequiredFields();

    fireEvent.click(screen.getByRole("button", { name: /send brief/i }));

    await waitFor(() => expect(mocks.error).toHaveBeenCalledOnce());
    expect(mocks.success).not.toHaveBeenCalled();
    expect(screen.getByPlaceholderText("Jane Cooper")).toHaveValue("Test Person");
  });
});
