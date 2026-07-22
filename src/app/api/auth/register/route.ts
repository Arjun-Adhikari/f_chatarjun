import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiBaseUrl = process.env.API_BASE_URL;
  if (!apiBaseUrl) {
    return NextResponse.json({ error: "Server config error" }, { status: 500 });
  }

  try {
    const { name, email, password } = await request.json();

    const res = await fetch(`${apiBaseUrl}/auth/sign-up/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorBody.message || errorBody.error || "Registration failed" },
        { status: res.status },
      );
    }

    const data = await res.json();
    const setCookieHeader = res.headers.get("set-cookie");

    const response = NextResponse.json({
      success: true,
      accessToken: data.accessToken || data.token || null,
      user: data.user || null,
    });

    if (setCookieHeader) {
      response.headers.set("Set-Cookie", setCookieHeader);
    }

    return response;
  } catch {
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 },
    );
  }
}
