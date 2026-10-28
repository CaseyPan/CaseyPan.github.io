// Reading list — real reviews, written casually on purpose. This is the
// personal corner of the site; keep the voice as-is when adding more.

export type BookStatus = "READ" | "READING" | "WANT_TO_READ";

export type Book = {
  slug: string;
  title: string;
  author: string;
  cover?: string; // path under /public, e.g. "/images/books/slug.jpg"
  dateFinished?: string; // "YYYY-MM-DD" — when status is READ
  status: BookStatus;
  rating?: number; // out of 5
  review: string[]; // paragraphs
  contentWarning?: string;
};

export const books: Book[] = [
  {
    slug: "anxious-people",
    title: "Anxious People",
    author: "Fredrik Backman",
    cover: "/images/books/anxious-people.jpg",
    dateFinished: undefined, // TODO: when did you finish this one?
    status: "READ",
    rating: 4.8,
    review: [
      "I haven't read a book I've loved this much in a long time (not that I read that much lol). It instantly made it onto my all-time favorites list.",
      "It's such a perfect mix of everything — a compelling mystery, beautiful storytelling, humor, quirky characters, wholesome moments, and surprising emotional depth. I found myself genuinely attached to every character and invested in each of their stories.",
      "It also has several plot twists that completely caught me off guard, which made it impossible to put down.",
      "But what I loved most is that it's the perfect bedtime read. It's interesting and exciting enough that you'll go to sleep looking forward to waking up and reading the next chapter, yet comforting and gentle enough to quiet your mind and help you drift off peacefully.",
      "Highly recommend it to anyone looking for their next read. 🫶",
    ],
  },
  {
    slug: "eleanor-oliphant-is-completely-fine",
    title: "Eleanor Oliphant is Completely Fine",
    author: "Gail Honeyman",
    cover: "/images/books/eleanor-oliphant-is-completely-fine.jpg",
    dateFinished: undefined, // TODO: when did you finish this one?
    status: "READ",
    rating: 3.8,
    review: [
      "Overall, I really enjoyed the writing. The author has a beautiful way of capturing emotions with such precision and subtlety, using vivid imagery to make even the most fleeting feelings feel tangible, like “I felt a flash of happiness, like a match being struck.” Eleanor is portrayed as an incredibly vivid character with such a distinct personality. Her social awkwardness is captured so well that you can almost hear her voice and imagine exactly how she'd react in different situations.",
      "What I loved most was how realistic and unglamorous the ending was. Not every story, or every life, needs a perfect, glamorous ending to be beautiful, meaningful, or worth living (or reading!). There's a certain bittersweetness to the ending. You might feel a little underwhelmed or even slightly disappointed, but at the same time, you realize that's part of the beauty of life. Sometimes, simply getting better and learning to live again is enough.",
      "That being said, I do have some mixed feelings about the pacing and character development. The first part of the book does an excellent job of establishing Eleanor's personality and gradually revealing her past. However, about a third of the way through, I already had a pretty good idea of what had happened to her. The final plot twist didn't feel particularly surprising or impactful to me — rather than changing my understanding of the story, it felt more like it was simply filling in a few missing details. I also felt that the final part of the book was a little rushed, especially Eleanor's recovery. After everything she'd been through, her transformation seemed almost too quick. The book spends so much time establishing her trauma, loneliness, and deeply ingrained ways of thinking, yet after roughly two months of therapy, she seems to have made tremendous progress. I wish the author had spent more time exploring her therapy sessions and the gradual process of recovery, as well as her transition back to work. Of course, I also understand that sometimes a realization, a new perspective, or someone showing you genuine kindness can bring a little light back into your life — and perhaps that's exactly what the author wanted to convey.",
      "A funny little side note: while reading, I found myself lowkey envious of the mental health support system portrayed in Scotland lol. The workplace and society depicted in the book seem so much more understanding and supportive when it comes to mental health and personal well-being. For example, Eleanor has a return-to-work interview with her manager to make sure she's ready, followed by a phased return-to-work schedule where she gradually resumes her responsibilities while still receiving her full salary. We should have something like this in the States too 😭😆",
      "Final thoughts: overall, it's a lovely, bittersweet, character-driven story about social awkwardness, loneliness, trauma, kindness, and learning to live again.",
    ],
    contentWarning:
      "One thing I wish I'd known before picking up this book is just how emotionally intense some parts of it can get. There's a particularly heavy section where the author describes Eleanor's suicide attempt through excessive drinking, including her mental state, thought process, and the way she talks to herself during that time. I personally found this part quite shocking and upsetting — it brought back some of the most difficult memories of my own life, and I honestly wasn't prepared for it, especially since none of the reviews I'd read beforehand had really warned me about how intense it could be. For anyone who has experienced depression, suicidal thoughts, or difficult periods in their mental health, I think this is something worth knowing before reading.",
  },
];
