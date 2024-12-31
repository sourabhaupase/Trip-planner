import BannerContent from "@/components/Banner/BannerContent";
import Header from "@/components/ui/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <BannerContent />
        {/* <LogoSection />> */}
        Main content goes here
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
