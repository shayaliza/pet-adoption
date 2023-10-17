import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import AddPetButton from "./components/addpet";
import PetGallery from "./components/gallery";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SearchBar />
      <AddPetButton />
      <PetGallery />
    </main>
  );
}
