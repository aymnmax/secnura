export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function postJson<TResponse, TBody>(url: string, body: TBody): Promise<TResponse> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = (await response.json().catch(() => null)) as
    | (TResponse & { error?: string })
    | null;

  if (!response.ok) {
    throw new ApiError(data?.error ?? "Something went wrong. Please try again.", response.status);
  }

  return data as TResponse;
}
