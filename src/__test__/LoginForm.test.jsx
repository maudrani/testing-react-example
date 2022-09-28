import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { LoginForm } from "../components/LoginForm";

describe("LoginForm", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it("shoul display both inputs", () => {
    expect(screen.getByLabelText(/nombre de usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
  });

  it("should display button", () => {
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it("should have correct values into both inputs", async () => {
    const usernameField = screen.getByLabelText(/nombre de usuario/i);
    const passwordField = screen.getByLabelText(/contraseña/i);
    const submitButton = screen.getByText(/login/i);

    const usernameValue = "mauricio";
    const passwordValue = "!Mauricio123";

    await user.type(usernameField, usernameValue);
    await user.type(passwordField, passwordValue);

    await waitFor(() => expect(usernameField).toHaveValue(usernameValue));
    await waitFor(() => expect(passwordField).toHaveValue(passwordValue));
    await waitFor(() => expect(submitButton).not.toBeDisabled());

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(`User: ${usernameValue}`)).toBeInTheDocument();
      expect(screen.getByText(`Password: ${passwordValue}`)).toBeInTheDocument();
    });
  });

  it("should have inorrect values into both inputs", async () => {
    const usernameField = screen.getByLabelText(/nombre de usuario/i);
    const passwordField = screen.getByLabelText(/contraseña/i);
    const submitButton = screen.getByText(/login/i);

    const usernameValue = "mauricio12312312123";
    const passwordValue = "Mauricio123";

    await user.type(usernameField, usernameValue);
    await user.type(passwordField, passwordValue);

    await waitFor(() => expect(usernameField).toHaveValue(usernameValue));
    await waitFor(() => expect(passwordField).toHaveValue(passwordValue));
    await waitFor(() => expect(submitButton).toBeDisabled());

    await waitFor(() => {
      expect(screen.getByText(`Username debe ser máximo de 12 caracteres`)).toBeInTheDocument();
    });
  });
});
