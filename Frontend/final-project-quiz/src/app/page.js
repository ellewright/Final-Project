import { Question } from "@/components/Question";
function Text({ content, strong }) {
  if (strong) {
    return <strong>{content}</strong>
  }

  return <p>{content}</p>
}

export default function Home() {
  return <div>
    <Text content="Welcome to the Ellie test." strong={false} />
    <Text content="My name is Ellie." strong={true} />
    <Text content="Good luck." strong={false} />
    <Question text={"Who is my favorite singer?"} choices={["Taylor Swift", "Ed Sheeran", "Ariana Grande"]} answer={"Taylor Swift"} />
  </div>;
}
