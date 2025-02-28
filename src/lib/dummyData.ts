export const checklistItems = [
  {
    title: "Checklist Item 1",
  },
  {
    title: "Checklist Item 2",
  },
  {
    title: "Checklist Item 3",
  },
  {
    title: "Checklist Item 4",
  },
];

export const steps = [
  { number: 1, text: "Choose your membership tier", hasArrow: true },
  { number: 2, text: "Get your monthly book selection", hasArrow: true },
  { number: 3, text: "Join our discussion forums", hasArrow: true },
  { number: 4, text: "Attend exclusive meetups", hasArrow: false },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "$19",
    featured: false,
    frequency: "month",
    features: ["1 book/month", "Online forums"],
    button: { label: "SUBSCRIBE NOW", url: "#", variant: "default" },
  },
  {
    title: "Pro",
    price: "$29",
    featured: true,
    frequency: "month",
    features: ["2 books/month", "Virtual meetups"],
    button: { label: "SUBSCRIBE NOW", url: "#", variant: "default" },
  },
  {
    title: "Enterprise",
    price: "Custom",
    featured: false,
    frequency: null,
    features: ["Team access", "Private sessions"],
    button: { label: "TALK TO US", url: "#", variant: "default" },
  },
];

export const testimonials = [
  {
    stars: 5,
    name: "Sarah Chen, Software Architect",
    text: "This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!",
  },
];
