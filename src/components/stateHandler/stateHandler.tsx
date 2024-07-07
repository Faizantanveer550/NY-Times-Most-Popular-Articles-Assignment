import { useState } from "react";
import { ErrorStateStyled } from "./stateHandler.styles";
import { StateHandlerProps } from "./stateHandler.types";
import { crossIcon } from "../../svgs";

const StateHandler = (props: StateHandlerProps): JSX.Element => {
  const { error, children, isLoading, blankSlate } = props;

  const [enableError, setEnableError] = useState(true);

  if (error) {
    return enableError ? (
      <>
        <ErrorStateStyled className="simple-component-error-alert">
          <span>{(error as any)?.formattedMsg}</span>
          <button
            onClick={(): void => setEnableError(false)}
            data-testid="state-handler-error-close-btn"
          >
            {crossIcon}
          </button>
        </ErrorStateStyled>

        {blankSlate}
      </>
    ) : (
      <div />
    );
  }

  return isLoading && !(error instanceof Error)
    ? blankSlate ?? <div data-testid="state-handler-blank-slate-def-content" />
    : children;
};

export default StateHandler;
