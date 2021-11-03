const data = [
  {
    id: 1,
    breed: "American Short Hair",
    fact: "When describing the American Shorthair, the expression “happy medium” springs to mind. These all-American cats are medium in size, build, type, and temperament; they are neither too big nor too small, not overly cuddly nor distant, neither couch potatoes nor hyperactive. The American Shorthair is the perfect breed for those who want a cat that enjoys being in your lap but not in your face. American Shorthairs are known for their adaptable temperaments and quiet voices; they are sociable, easily trained, and adapt well to other animals and children. They generally do not like to be picked up; like their Pilgrim companions who left England to find freedom, they cherish their independence. Because of the American Shorthair’s history as a working cat, they make great companions in terms of health, strength, and vitality. American Shorthairs enjoy a good romp with their favorite humans, but can amuse themselves with a ball of paper just as well. They tend to remain active and playful well into their old age. Due to their barn cat background, ASHs have strong hunting instincts and enjoy catching and killing catnip mice—and real ones, too, if given access to the great outdoors, something that’s discouraged by breeders. Your indoor ASH will put presents on your pillow, usually well-killed catnip mice, and proudly wait for the well-deserved petting and praise.",
    image: "/public/americanShort.jpg",
  },
  {
    id: 2,
    breed: "Maine Coon",
    fact: "No breed has a monopoly on love and affection, but there’s got to be some good reason that Maine Coons have clawed their way up from near extinction to the prized place of America’s second most popular breed (according to the CFA’s registration totals). Maine Coon fans say that the popularity is due to the breed’s large size, intelligence, luxuriant coat, hardy disposition, and devotion to their human family. Maine Coons are kittens in big cat suits, gentle giants who are playful well into old age, as well as jumbo-sized packages of loving devotion. Maine Coons can also be reserved around people with whom they’re not familiar, probably due to their jumbo-sized brains. Given time, however, even the most cautious adapt. This initial adjustment period is actually a decision-making process; Maine Coons are deciding if these new humans have proven themselves worthy of trust. As soon as they make up their minds, however, they form close bonds with the entire household and become loving and devoted.",
    image: "/public/maineCoon.jpg",
  },
  {
    id: 3,
    breed: "Persian Cat",
    fact: "If you want your cats bouncing around like hyperactive popcorn, don’t adopt a Persian. Persians are perfect companions, if you like placid, sweet-tempered cats. Don’t count on using your Persian pal as a furry doorstop, however. They love to play between periods of regal lounging on your favorite davenport. Proponents say that Persians do not deserve their furniture-with-fur reputation; they are intelligent, just not as inquisitive as some breeds, and not as active.Persians are devoted to their humans, but can be selective in conferring that honor. You must earn their trust and love. They crave affection and love to be petted and fussed over, but won’t harass you for attention the way some breeds will. They will, however, let their feelings be known if they are not getting the requisite amount of attention.Persians require significant time commitment. That beautiful coat requires daily grooming to keep it in good condition and free of mats. Many Persians require professional grooming. ",
    image: "/public/persian.jpg",
  },
];

const list = () => {
  return [...data];
};

const find = (id) => {
  const cat = data.find((cat) => cat.id === Number(id));
  return { ...cat };
};

module.exports = {
  list: list,
  find: find,
};
