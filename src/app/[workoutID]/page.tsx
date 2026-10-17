import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Workout } from '../type';
import SaveTodaysPlanBtn from '../components/ClientSideButtons/SaveTodaysPlanBtn';
import SaveLaterBtn from '../components/ClientSideButtons/SaveLaterBtn';

interface PageProps {
  params: Promise<{ workoutID: string }> | { workoutID: string };
}

async function getWorkout(id: string): Promise<Workout | null> {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    // Handles direct object response or wrapped { data } / { workout } payloads
    return (data?.data || data?.workout || data) as Workout;
  } catch (error) {
    console.error('Failed to load workout details:', error);
    return null;
  }
}

export default async function WorkoutDetailsPage({ params }: PageProps) {
  const { workoutID } = await params;
  const workout = await getWorkout(workoutID);

  if (!workout) {
    notFound();
  }

  const specs = [
    { label: 'EQUIPMENT', value: workout.equipment },
    { label: 'DIFFICULTY', value: workout.difficulty },
    { label: 'SETS', value: workout.sets },
    { label: 'REPS', value: workout.reps },
    { label: 'DURATION', value: `${workout.duration} min` },
    { label: 'CALORIES', value: `${workout.caloriesBurned} kcal` },
    { label: 'RATING', value: workout.rating },
  ];

  return (
    <main className="min-h-screen bg-[#0f1013] text-neutral-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Workout Image */}
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-[#16171b] border border-white/5 shadow-2xl">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right Column: Workout Info & Specs */}
          <div className="flex flex-col">
            {/* Title & Description */}
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {workout.name}
            </h1>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-normal">
              {workout.description}
            </p>

            {/* Muscle Group Badges */}
            <div className="flex flex-wrap gap-2 mt-5">
              {workout.muscleGroups?.map((muscle, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#c2f800] text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Specs Table Container */}
            <div className="mt-6 rounded-2xl bg-[#16171b] border border-white/5 px-5 py-2 divide-y divide-white/5">
              {specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2.5 text-xs"
                >
                  <span className="font-semibold text-neutral-400 uppercase tracking-wider text-[11px]">
                    {item.label}
                  </span>
                  <span className="font-medium text-neutral-200 text-xs text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Instructions */}
            {workout.instructions && workout.instructions.length > 0 && (
              <div className="mt-7">
                <h2 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                  INSTRUCTIONS
                </h2>
                <ol className="space-y-2 text-xs text-neutral-300 leading-relaxed">
                  {workout.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-neutral-400 font-medium select-none">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Add to today's plan */}
              <SaveTodaysPlanBtn />

              {/* Save for later */}
              <SaveLaterBtn />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}