import { useState } from "react";
import { MENU } from "../data/menu";
import MenuSection from "./menu/MenuSection";
import CafeMenuSection from "./menu/CafeMenuSection";
import CafeAboutSection from "./about/CafeAboutSection";
import CafeActionRow from "./filter/CafeActionRow";
import CafeFilterPanel from "./filter/CafeFilterPanel";
import Addpage from "./add/Addpage";

function CafeMenuPage() {
  const [addpage, setAddpage] = useState(false);
  const [part, setPart] = useState("전체");
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("이름순");

  return (
    <div className="container">
      <h2 className="title">카페 메뉴</h2>

      <MenuSection>
        <CafeActionRow setAddpage={setAddpage} menuItems={MENU} />

        <div className="line" />

        <CafeFilterPanel
          part={part}
          sortBy={sortBy}
          searchText={searchText}
          onPartChange={setPart}
          onSortByChange={setSortBy}
          onSearchTextChange={setSearchText}
        />
      </MenuSection>

      {addpage && <Addpage />}
      {!addpage && (
        <>
          <CafeMenuSection items={MENU} />
          <CafeAboutSection items={MENU} />
        </>
      )}
    </div>
  );
}

export default CafeMenuPage;