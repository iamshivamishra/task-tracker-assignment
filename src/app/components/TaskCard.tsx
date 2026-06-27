"use client";

import { ITask } from "@/models/Task";

interface TaskCardProps {
  task: ITask;
  onEdit: (task: ITask) => void;
  onDelete: (id: string) => void;
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  "in-progress": "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
};

const priorityColors: Record<string, string> = {
  low: "bg-gray-100 text-gray-600",
  medium: "bg-orange-100 text-orange-600",
  high: "bg-red-100 text-red-600",
};

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 hover:shadow-lg transition">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>

      {/* Description */}
      {task.description && (
        <p className="text-sm text-gray-500">{task.description}</p>
      )}

      {/* Badges */}
      <div className="flex gap-2 flex-wrap">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${statusColors[task.status]}`}
        >
          {task.status}
        </span>
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${priorityColors[task.priority]}`}
        >
          {task.priority} priority
        </span>
      </div>

      {/* Date */}
      <p className="text-xs text-gray-400">
        Created: {new Date(task.createdAt).toLocaleDateString()}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-1">
        <button
          onClick={() => onEdit(task)}
          className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm py-1.5 rounded-lg font-medium transition"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(task._id.toString())}
          className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 text-sm py-1.5 rounded-lg font-medium transition"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}