import { screen, render, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { LoginForm } from "../components/LoginForm";

describe("LoginForm", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it("should exist two inputs in the view", () => {
    expect(screen.getByLabelText(/nombre de usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });

  it("should exist a login button", () => {
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it("should have the correct value when the user type in the fields", async () => {
    const usernameField = screen.getByLabelText(/nombre de usuario/i);
    const passwordField = screen.getByLabelText(/contraseña/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    const usernameValue = "mauricio";
    const passwordValue = "Mauricio123!";

    await user.type(usernameField, usernameValue);
    await user.type(passwordField, passwordValue);

    await waitFor(() => expect(usernameField).toHaveValue(usernameValue));
    await waitFor(() => expect(passwordField).toHaveValue(passwordValue));
    await waitFor(() => expect(submitButton).not.toBeDisabled());

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(`User: ${usernameValue}`)).toBeInTheDocument();
      expect(
        screen.getByText(`Password: ${passwordValue}`)
      ).toBeInTheDocument();
    });
  });

  test("should have errors message when the value of the fields are invalid", async () => {
    const usernameField = screen.getByLabelText(/nombre de usuario/i);
    const passwordField = screen.getByLabelText(/contraseña/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    const usernameValue = "username12345";
    const passwordValue = "pass123";

    await user.type(usernameField, usernameValue);
    await user.type(passwordField, passwordValue);

    await waitFor(() =>
      expect(
        screen.getByText("Username debe ser máximo de 12 caracteres")
      ).toBeInTheDocument()
    );

    await waitFor(() =>
      expect(
        screen.getByText(
          "Password debe ser alfanumérico, y contener máximo 12 caracteres, una mayúscula y un caracter especial"
        )
      ).toBeInTheDocument()
    );

    await waitFor(() => expect(submitButton).toBeDisabled());
  });
});
