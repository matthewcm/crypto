interface HttpException extends Error {
  message: string;
  status: number;
}

export default HttpException;
