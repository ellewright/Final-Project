import { score } from "../page";
import questions from "../questions";
import Link from "next/link";

export default function Results() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex-col">
                <div className="flex header items-center justify-center">
                    <h1>Results</h1>
                </div>
                <div className="flex score items-center justify-center">
                    <p>You got {score} correct answers out of {questions.length}.</p>
                </div>
                <div className="flex retry items-center justify-center">
                    <Link href="/">
                        Try again!
                    </Link>
                </div>
            </div>
        </div>
    )
}