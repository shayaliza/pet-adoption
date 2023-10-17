import { NextResponse } from "next/server";
export function GET(request) {
  const users = [
    {
      name: "ehfk",
      age: 23,
      email: "hjg@gmail.com",
    },
    {
      name: "pppk",
      age: 26,
      email: "ppg@gmail.com",
    },
  ];
  return NextResponse.json(users);
}
export function POST() {}
export function DELETE() {}
export function PUT() {}
