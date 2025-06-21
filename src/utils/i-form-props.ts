export interface IformProps<T> {
  defaultValues: T;
  handleService: (payload: T) => Promise<void>;
}
