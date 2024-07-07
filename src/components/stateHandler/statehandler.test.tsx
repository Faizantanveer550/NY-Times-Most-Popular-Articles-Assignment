import { render, fireEvent, screen } from "@testing-library/react";
import StateHandler from "./stateHandler";

const errorMock = {
  formattedMsg: "Error message",
};

test("Snapshot Test", () => {
  const { asFragment } = render(
    <StateHandler error={errorMock} isLoading={false}>
      <div />
    </StateHandler>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("StateHandler renders error message and close button", () => {
  render(
    <StateHandler error={errorMock} isLoading={false}>
      <div />
    </StateHandler>
  );

  expect(screen.getByText(errorMock.formattedMsg)).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("StateHandler hides error message on close button click", () => {
  render(
    <StateHandler error={errorMock} isLoading={false}>
      <div />
    </StateHandler>
  );

  const closeButton = screen.getByTestId("state-handler-error-close-btn");
  fireEvent.click(closeButton);

  expect(screen.queryByText(errorMock.formattedMsg)).not.toBeInTheDocument();
});

test("StateHandler renders custom blank slate if provided", () => {
  const customBlankSlate = <p>Loading...</p>;
  render(
    <StateHandler isLoading={true} blankSlate={customBlankSlate} error={false}>
      <div />
    </StateHandler>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("StateHandler renders children when no error or loading", () => {
  const children = <p>This is the content.</p>;
  render(
    <StateHandler isLoading={false} error={false}>
      {children}
    </StateHandler>
  );

  expect(screen.getByText("This is the content.")).toBeInTheDocument();
});

test("StateHandler renders default blank slate when not provided", () => {
  render(
    <StateHandler isLoading={true} error={false}>
      <div />
    </StateHandler>
  );

  expect(
    screen.getByTestId("state-handler-blank-slate-def-content")
  ).toBeInTheDocument();
});
