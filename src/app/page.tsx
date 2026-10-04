import WorkList from "@/components/home/work-list";
import WorkStage from "@/components/home/work-stage";

export default function Home() {
  return (
    <main className="brand">
      <WorkStage />
      <WorkList />
    </main>
  );
}
