import {
  AlertCircle,
  RefreshCcw,
} from "lucide-react";

function ErrorState({
  title = "Unable to load data",
  message = "Something went wrong. Please try again.",
  onRetry,
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-50 text-red-500">
        <AlertCircle size={25} />
      </div>

      <h3 className="mt-4 font-semibold text-[#173b3f]">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm text-slate-400">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 flex items-center gap-2 rounded-xl bg-[#149883] px-4 py-2.5 text-sm text-white"
        >
          <RefreshCcw size={16} />

          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorState;