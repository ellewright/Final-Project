import { score } from "../page";
import questions from "../questions";
import Link from "next/link";

export default function Results() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex-col bg-rose-400 rounded-md p-2">
                <div className="flex header p-2 items-center justify-center">
                    <h1 className="text-rose-300">Results</h1>
                </div>
                <div className="flex score p-2 items-center justify-center">
                    <p className="text-rose-300">You got {score} correct answer(s) out of {questions.length}.</p>
                </div>
                <div className="flex retry p-2 items-center justify-center">
                    <Link href="/" className="text-gray-800 font-sans border-2 border-rose-300 p-4 rounded-md bg-rose-100 hover:bg-rose-200 active:bg-rose-300 focus:outline-none focus:ring focus:ring-rose-500">
                        Try again!
                    </Link>
                </div>
            </div>
        </div>
    )
}