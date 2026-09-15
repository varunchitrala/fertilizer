import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AwardsHero from "./components/AwardsHero/AwardsHero";
import AwardMilestones from "./components/AwardMilestones/AwardMilestones";
import AwardSpotlight from "./components/AwardSpotlight/AwardSpotlight";
import AwardsToolbar from "./components/AwardsToolbar/AwardsToolbar";
import AwardsGrid from "./components/AwardsGrid/AwardsGrid";
import Accreditations from "./components/Accreditations/Accreditations";
import AwardsCta from "./components/AwardsCta/AwardsCta";
import AwardCertificateModal from "./components/AwardCertificateModal/AwardCertificateModal";
import {
  accreditationsData,
  awardCategories,
  awardMilestones,
  awardsData,
} from "./data/awardsData";
import "./Awards.css";

function Awards() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAward, setSelectedAward] = useState(null);

  const filteredAwards = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return awardsData.filter((award) => {
      const matchesCategory =
        activeCategory === "All" || award.category === activeCategory;
      const matchesSearch =
        normalizedQuery === "" ||
        award.title.toLowerCase().includes(normalizedQuery) ||
        award.conferredBy.toLowerCase().includes(normalizedQuery) ||
        award.year.includes(normalizedQuery) ||
        award.summary.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    if (!selectedAward) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedAward(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAward]);

  const resetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <>
      <Header />
      <main className="awards-page" id="awards-top">
        <AwardsHero />
        <AwardMilestones milestones={awardMilestones} />
        <AwardSpotlight award={awardsData[0]} onInspect={setSelectedAward} />
        <AwardsToolbar
          categories={awardCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultCount={filteredAwards.length}
        />
        <AwardsGrid
          awards={filteredAwards}
          onInspect={setSelectedAward}
          onReset={resetFilters}
        />
        <Accreditations items={accreditationsData} />
        <AwardsCta />
        <AwardCertificateModal
          award={selectedAward}
          onClose={() => setSelectedAward(null)}
        />
      </main>
      <Footer />
    </>
  );
}

export default Awards;
