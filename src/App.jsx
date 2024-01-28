import UserProfile from "./One/UserProfile";
import Collections from "./Three/Collections";
import JobList from "./Two/JobList";
import Header from "./landingPage/header/header";
import Search from "./landingPage/header/search";

function App() {
  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center gap-2 bg-[#E6EFFA]">
      {/* <UserProfile /> */}
      {/* <JobList /> */}
      {/* <Collections /> */}
      <Header />
      <Search />
    </div>
  );
}

export default App;
