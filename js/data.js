// All client data from the coach's Google Sheet, translated to English.
// Edit this file to update the program, profile or default meal plan.
window.ATHLO = {
  client: {
    name: "",       // left blank on purpose: no names in the public site
    age: 33,
    injuries: "",           // none listed in the sheet
    experience: "Average",
    goal: "Total body"
  },

  // Weekly schedule (Monday → Sunday). "day" links to a session id below.
  schedule: [
    { weekday: "Monday",    label: "Pull + Deadlifts", day: "pull" },
    { weekday: "Tuesday",   label: "Rest",            day: null },
    { weekday: "Wednesday", label: "Push",            day: "push" },
    { weekday: "Thursday",  label: "Rest",            day: null },
    { weekday: "Friday",    label: "Lower body",      day: "lower" },
    { weekday: "Saturday",  label: "Rest",            day: null },
    { weekday: "Sunday",    label: "Upper body",      day: "upper" }
  ],

  sessions: [
    {
      id: "pull", number: 1, title: "Pull + Deadlifts", weekday: "Monday",
      exercises: [
        { name: "Single-arm rear delt fly",       sets: 3, reps: "10–15", video: "https://www.youtube.com/watch?v=qz1OLup4W_M" },
        { name: "Single-arm cable pulldown",      sets: 2, reps: "6–8",   video: "https://www.youtube.com/watch?v=M9xUoJYtXtc" },
        { name: "Cable wide-grip row",            sets: 3, reps: "6–8",   video: "https://www.youtube.com/watch?v=iXGHN-MWFfY" },
        { name: "Single-arm Cybex Eagle row",     sets: 2, reps: "6–8",   video: "https://www.youtube.com/watch?v=rjY71rDoYKk" },
        { name: "Romanian deadlift",              sets: 2, reps: "6–8",   video: "https://www.youtube.com/watch?v=LURGDIX3adY" },
        { name: "Single-arm dumbbell preacher curl", sets: 3, reps: "8–12", video: "https://www.youtube.com/watch?v=enH6glsf-u4" },
        { name: "Incline dumbbell hammer curl",   sets: 3, reps: "10–15", video: "https://www.youtube.com/shorts/0t8JcuQ45VA" }
      ]
    },
    {
      id: "push", number: 2, title: "Push", weekday: "Wednesday",
      exercises: [
        { name: "Seated dumbbell lateral raise",  sets: 3, reps: "10–12", video: "https://www.youtube.com/shorts/qqntiuPmLDM" },
        { name: "Barbell incline press",          sets: 3, reps: "6–8",   video: "https://www.youtube.com/shorts/RuI2IsZv4yw" },
        { name: "Delt press (machine)",           sets: 3, reps: "6–8",   video: "https://www.youtube.com/watch?v=b_WpiAL9DEQ" },
        { name: "Close-grip Smith press",         sets: 2, reps: "6–8",   video: "https://www.youtube.com/watch?v=qf_FTh3QyYs" },
        { name: "Pec deck",                       sets: 2, reps: "12–15", video: "https://www.youtube.com/watch?v=eGjt4lk6g34" },
        { name: "Knee-height cable lateral raise", sets: 2, reps: "12–15", video: "https://www.youtube.com/shorts/wXWLKKJ8HKg" },
        { name: "Dumbbell triceps extension",     sets: 3, reps: "10–15", video: "https://www.youtube.com/shorts/OQdGVIl6gec" }
      ]
    },
    {
      id: "lower", number: 3, title: "Lower body", weekday: "Friday",
      exercises: [
        { name: "Calf press",                     sets: 3, reps: "6–10",  video: "https://www.youtube.com/shorts/aNwI_Trh5z4" },
        { name: "Adductors",                      sets: 3, reps: "2 × 8–10, 1 × 12–15", video: "" },
        { name: "Lying leg curl",                 sets: 3, reps: "6–10",  video: "https://www.youtube.com/watch?v=WOsH7X8mGYs" },
        { name: "Leg extension",                  sets: 3, reps: "12–15", video: "https://www.youtube.com/watch?v=ZCXC7M9pfHo" },
        { name: "Hack squat",                     sets: 2, reps: "6–8",   video: "https://www.youtube.com/watch?v=rYgNArpwE7E" },
        { name: "Single-leg leg press",           sets: 2, reps: "6–8",   video: "https://www.youtube.com/watch?v=IUnXPPBkY2A" },
        { name: "Seated leg curl",                sets: 2, reps: "8–10",  video: "https://www.youtube.com/watch?v=Ss8zTJH5UJU" },
        { name: "Barbell hip thrust",             sets: 2, reps: "12–15", note: "1-second pause at the bottom", video: "https://www.youtube.com/watch?v=5S8SApGU_Lk" }
      ]
    },
    {
      id: "upper", number: 4, title: "Upper body", weekday: "Sunday",
      exercises: [
        { name: "Low cable lateral raise",        sets: 3, reps: "10–15", video: "https://www.youtube.com/watch?v=Z5FA9aq3L6A" },
        { name: "Incline chest press",            sets: 3, reps: "6–8",   video: "https://www.youtube.com/watch?v=cVP9cHVrbPg" },
        { name: "Wide-grip pulldown",             sets: 3, reps: "6–8",   video: "https://www.youtube.com/watch?v=JGeRYIZdojU" },
        { name: "Smith delt press",               sets: 2, reps: "6–8",   video: "https://www.youtube.com/shorts/mSZNWBeJaLs" },
        { name: "Single-arm cable row",           sets: 2, reps: "6–8",   video: "https://www.youtube.com/watch?v=1jN6qeXdvWA" },
        { name: "Incline dumbbell curl",          sets: 3, reps: "8–12",  video: "https://www.youtube.com/shorts/5hqKVbVn2iw" },
        { name: "Cable triceps extension",        sets: 3, reps: "10–15", note: "Any grip you like", video: "" }
      ]
    }
  ],

  // Default meal plan. Only meal 3 is filled in the sheet so far.
  meals: [
    { title: "Meal 1", tag: "Pre-workout", foods: "" },
    { title: "Meal 2", tag: "",            foods: "" },
    { title: "Meal 3", tag: "",            foods: "50 g quinoa (white)\n110 g beef steak\n100 g tomato\n100 g cucumber\n50 g spring onion\n20 g dried apricot" },
    { title: "Meal 4", tag: "",            foods: "" },
    { title: "Meal 5", tag: "",            foods: "" }
  ],

  weeks: 17
};
