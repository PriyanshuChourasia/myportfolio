export interface IAppRouteInterface {
  path: string;
  element: JSX.Element;
  errorElement: JSX.Element | null;
  isHeader: boolean;
  icon?: JSX.Element;
  name: string;
  children?: IAppChildRouteInterface[];
}

export interface IAppChildRouteInterface {
  path: string;
  element: JSX.Element;
  errorElement: JSX.Element;
  isHeader: boolean;
  icon?: JSX.Element;
  name: string;
}
