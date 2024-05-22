import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can recive a new user and show it on a list", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  user.click(nameInput);
  user.keyboard("jane");

  user.click(emailInput);
  user.keyboard("jane@jane.com");

  const button = screen.getByRole("button");
  user.click(button);

  const name = screen.getByRole("cell", { name: "jane" });
  const email = screen.getByRole("cell", { name: "jane@jane.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
