import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Home() {
  return (
    <div className="h-full w-full">
      <div>
        <Input placeholder="Enter medium blog url" />
        <Button>Search</Button>
      </div>
    </div>
  );
}

export default Home;
