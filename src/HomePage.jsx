import ArticleGrid1 from "./components/ArticleGrid1";
import ArticlesData from "./components/ArticlesData";

const HomePage = () => {
  return (
    <div>
      <ArticleGrid1
        articles={ArticlesData.slice(0, 4)}
        sectionTitle="Featured Articles"
        sectionSubtitle="Highting our top articles this month"
      />
    </div>
  );
};

export default HomePage;
