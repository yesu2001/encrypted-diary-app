const tipsAndQuotes = [
  {
    tip: "Believe in yourself; you are braver than you think, more talented than you know, and capable of more than you imagine.",
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith.",
  },
  {
    tip: "Your attitude determines your direction. Stay positive, stay fighting, stay brave, stay ambitious, and stay focused.",
    quote:
      "Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma, which is living the result of other people's thinking.",
  },
  {
    tip: "Don't be afraid to fail; be afraid not to try. Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    tip: "Embrace the journey of self-improvement; small steps each day lead to big results over time.",
    quote:
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  },
  {
    tip: "Learn from your mistakes; they are stepping stones to success. Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
    quote: "The best way to predict the future is to create it.",
  },
  {
    tip: "Surround yourself with positive people who inspire and encourage you. Your vibe attracts your tribe.",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    tip: "Take care of your body; it's the only place you have to live. Your health is an investment, not an expense.",
    quote:
      "The only person you are destined to become is the person you decide to be.",
  },
  {
    tip: "Success is not just about making money; it's about making a difference. Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith.",
  },
  {
    tip: "Celebrate your progress, no matter how small. Small daily improvements are the key to staggering long-term results.",
    quote: "Strive not to be a success, but rather to be of value.",
  },
  {
    tip: "Don't compare your chapter 1 to someone else's chapter 20. Everyone has their own timeline for success.",
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  },
  {
    tip: "Choose kindness; it's a language that the deaf can hear and the blind can see.",
    quote: "The purpose of our lives is to be happy.",
  },
  {
    tip: "Keep learning and growing. The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    quote: "Life is 10% what happens to us and 90% how we react to it.",
  },
  {
    tip: "Set goals that make you want to jump out of bed in the morning. Your time is now. Start where you stand and never back down.",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    tip: "Your mindset determines your success. Whether you think you can or you think you can't, you're right.",
    quote:
      "The only way to achieve the impossible is to believe it is possible.",
  },
  {
    tip: "Practice gratitude daily; it turns what we have into enough. Be thankful for what you have; you'll end up having more.",
    quote: "Don't watch the clock; do what it does. Keep going.",
  },
  {
    tip: "Failure is not the opposite of success; it's part of success. Success is not in what you have, but who you are.",
    quote: "Believe you can and you're halfway there.",
  },
  {
    tip: "Be yourself; everyone else is already taken. Your value doesn't decrease based on someone's inability to see your worth.",
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    tip: "Life is 10% what happens to us and 90% how we react to it. Your life does not get better by chance; it gets better by change.",
    quote: "The best way to predict the future is to create it.",
  },
  {
    tip: "Don't be afraid to stand for what you believe in, even if it means standing alone.",
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
  },
  {
    tip: "Success is not final, failure is not fatal: It is the courage to continue that counts. Be so good they can't ignore you.",
    quote:
      "The only person you are destined to become is the person you decide to be.",
  },
  {
    tip: "Don't let yesterday take up too much of today. You are never too old to set another goal or to dream a new dream.",
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
  },
  {
    tip: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
  },
  {
    tip: "Dream big, work hard, stay focused, and surround yourself with good people.",
    quote: "I find that the harder I work, the more luck I seem to have.",
  },
  {
    tip: "Do something today that your future self will thank you for. The only limit to our realization of tomorrow will be our doubts of today.",
    quote: "Strive not to be a success, but rather to be of value.",
  },
  {
    tip: "Don't let the fear of losing be greater than the excitement of winning.",
    quote:
      "Success is not just about making money; it's about making a difference.",
  },
  {
    tip: "The only person you are destined to become is the person you decide to be. Believe you can and you're halfway there.",
    quote: "The best way to predict the future is to create it.",
  },
  {
    tip: "If you are not willing to risk the usual, you will have to settle for the ordinary. Your time is limited, don't waste it living someone else's life.",
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  },
  {
    tip: "Do not wait to strike till the iron is hot, but make it hot by striking. Success is not how high you have climbed, but how you make a positive difference to the world.",
    quote: "Your time is limited, don't waste it living someone else's life.",
  },
  {
    tip: "Strive not to be a success, but rather to be of value. Your life does not get better by chance; it gets better by change.",
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
  },
  {
    tip: "The best way to predict the future is to create it. Your attitude determines your direction.",
    quote: "Don't be afraid to fail; be afraid not to try.",
  },
  {
    tip: "Your time is now. Start where you stand and never back down. Embrace the journey of self-improvement; small steps each day lead to big results over time.",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    tip: "Life is 10% what happens to us and 90% how we react to it. Choose kindness; it's a language that the deaf can hear and the blind can see.",
    quote:
      "Keep learning and growing. The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
  },
  {
    tip: "Believe in yourself; you are braver than you think, more talented than you know, and capable of more than you imagine. Your mindset determines your success.",
    quote:
      "Dream big, work hard, stay focused, and surround yourself with good people.",
  },
];

export const getRandomTipAndQuote = () => {
  const randomIndex = Math.floor(Math.random() * tipsAndQuotes.length);
  return tipsAndQuotes[randomIndex];
};
