function LoadingSpinner({
  text = "Loading hospital data...",
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#d8eee9] border-t-[#149883]" />

      <p className="mt-4 text-sm text-slate-400">
        {text}
      </p>
    </div>
  );
}

export default LoadingSpinner;