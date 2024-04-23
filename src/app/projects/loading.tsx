export default function Loading() {
  return (
    <div className="grid justify-between items-center pb-10 gap-10 mt-[120px] grid-cols-1 w-full lg:grid-cols-3">
      {[...Array(3).keys()].map((i) => (
        <div
          key={i}
          className="flex flex-col gap-4 p-4 bg-white dark:bg-black dark:bg-opacity-15 bg-opacity-20 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-sm border-[0.5px] border-white	border-opacity-40 dark:border-black dark:border-opacity-15"
        >
          <div className="animate-pulse">
            <div className="h-6 w-1/3 rounded-md bg-gray-300 dark:bg-gray-500 mb-4" />
            <div className="h-4 w-full rounded-md bg-gray-300 dark:bg-gray-500 mb-2" />
            <div className="h-4 w-full rounded-md bg-gray-300 dark:bg-gray-500 mb-2" />
            <div className="h-4 w-full rounded-md bg-gray-300 md:hidden dark:bg-gray-500 mb-2" />
            <div className="h-4 w-full rounded-md bg-gray-300 md:hidden lg:block dark:bg-gray-500 mb-2" />
            <div className="h-4 w-full rounded-md bg-gray-300 md:hidden lg:block dark:bg-gray-500 mb-2" />
            <div className="h-4 w-full rounded-md bg-gray-300 md:hidden lg:block dark:bg-gray-500 mb-2" />
            <div className="h-4 w-full rounded-md bg-gray-300 dark:bg-gray-500 mb-2" />
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
              <div className="h-4 w-20 rounded-md bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-10 rounded-md bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-20 rounded-md bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-16 rounded-md bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-25 rounded-md bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-18 rounded-md md:hidden lg:block bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-20 rounded-md md:hidden lg:block bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-25 rounded-md md:hidden lg:block bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-16 rounded-md md:hidden lg:block bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-18 rounded-md md:hidden lg:block bg-gray-300 dark:bg-gray-500" />
              <div className="h-4 w-10 rounded-md md:hidden lg:block bg-gray-300 dark:bg-gray-500" />
            </div>
            <div className="flex">
              <div className="h-5 w-10 rounded-md bg-gray-300 dark:bg-gray-500 mr-5" />
              <div className="h-5 w-10 rounded-md bg-gray-300 dark:bg-gray-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
