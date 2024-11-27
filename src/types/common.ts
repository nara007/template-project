
type VoidCallback = () => void;

enum RequestStatus {
  PENDING,
  SUCCEEDED,
  FAILED,
}

enum HttpStatusCode {
  OK = 200,
  NOT_FOUND = 404,
}

export type { VoidCallback };
export { HttpStatusCode, RequestStatus };
