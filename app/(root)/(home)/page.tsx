import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQL Alchemy?",
    tags: [
      {
        _id: "1",
        name: "python",
      },
      {
        _id: "2",
        name: "sql",
      },
    ],
    author: {
      _id: "author1",
      name: "John Doe",
      picture: "profile1.jpg",
    },
    views: 100,
    answers: [
      { answerId: "1", content: "Sample Answer 1" },
      { answerId: "2", content: "Sample Answer 2" },
    ],
    upvotes: 5,
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a Div?",
    tags: [
      {
        _id: "1",
        name: "css",
      },
      {
        _id: "2",
        name: "react",
      },
    ],
    author: {
      _id: "author2",
      name: "John Doe",
      picture: "profile2.jpg",
    },
    views: 12123,
    answers: [
      { answerId: "1", content: "Sample Answer 1" },
      { answerId: "2", content: "Sample Answer 2" },
    ],
    upvotes: 8,
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
];

// const questions = [];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((ques) => (
            <QuestionCard
              key={ques._id}
              _id={ques._id}
              title={ques.title}
              tags={ques.tags}
              author={ques.author}
              upvotes={ques.upvotes}
              views={ques.views}
              answers={ques.answers}
              createdAt={ques.createdAt}
            />
          ))
        ) : (
          <NoResult
            title=" There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. Our query could be the next big thing others learn from. Get
          involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
