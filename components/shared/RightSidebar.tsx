import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const topQuestions = [
  {
    _id: "1",
    title: "How do I use express as a custom server in Nextjs?",
  },
  {
    _id: "2",
    title: "Cascading delete in SQL Alchemy?",
  },
  {
    _id: "3",
    title: "How to perfectly center a div with Tailwind CSS?",
  },
  {
    _id: "4",
    title: "Redux toolkit not uploading state as expected",
  },
];

const popularTag = [
  {
    _id: "1",
    name: "Javascript",
    totalQuestions: 5,
  },
  {
    _id: "2",
    name: "ReactJS",
    totalQuestions: 3,
  },
  {
    _id: "3",
    name: "Nextjs",
    totalQuestions: 2,
  },
  {
    _id: "4",
    name: "VueJs",
    totalQuestions: 5,
  },
  {
    _id: "5",
    name: "Redux",
    totalQuestions: 5,
  },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border no-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="Arrow-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTag.map((tag) => (
            <RenderTag
              key={tag._id}
              name={tag.name}
              _id={tag._id}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
