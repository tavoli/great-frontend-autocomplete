export interface ResultItem {
  id: string;
  text: string;
}

export type Results = ResultItem[];

export interface AutoCompleteState {
  event: string;
  search: string;
  data: Results;
  loading: boolean;
  error: Error | null;
}

export interface AutoCompleteAction {
  type: string;
  payload: any;
}

export interface AutoCompleteProps {
  url: string;
  debounceTime?: number;
  minChars?: number;
  maxItems?: number;
  cache?: boolean;
  cacheDuration?: number;
  initialResults?: Results;
  inputAutoFocus?: boolean;
  inputShortcutKey?: string;
  useEnterAsSubmit?: boolean;
}

export interface ControllerContext {
  state: AutoCompleteState;
  dispatch: (action: AutoCompleteAction) => void;
}

export type SetState = React.Dispatch<React.SetStateAction<AutoCompleteState>>;

export interface ReducerProps {
  action: AutoCompleteAction;
  state: AutoCompleteState;
  setState: SetState;
  options: AutoCompleteProps;
}
