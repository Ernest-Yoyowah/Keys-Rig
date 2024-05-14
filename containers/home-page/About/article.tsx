import Link from "next/link";
import ArticleCard, { articles } from "../../../components/ui/articleCard";
import { Button } from "../../../components/ui/button";

const ArticlePage: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-start md:max-w-2xl pt-10">
          <div className="w-16 h-0.5 bg-yellow-400 mr-4"></div>
          <p className="text-sm font-normal">News Articles</p>
        </div>
        <div>
          <h1 className="head-text_1 mb-0 text-left">Read Latest Articles</h1>
        </div>
      </div>
      <div className="flex justify-around flex-col md:flex-row">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            imageUrl={article.imageUrl}
            topic={article.topic}
            description={article.description}
            articleLink={article.articleLink}
          />
        ))}
      </div>

      <div className="flex justify-center mt-0 mb-5">
        <Button variant="default">
          <Link href="/blog">Read All Articles</Link>
        </Button>
      </div>
    </>
  );
};

export default ArticlePage;
