interface SkillCardProps {
  name: string;
  level: number;
  category: string;
}

const getExpertiseFromLevel = (level: number) => {
  if (level < 70) return "Beginner";
  if (level < 85) return "Intermediate";
  if (level < 95) return "Advanced";
  return "Expert";
};

const SkillCard = ({ name, level, category }: SkillCardProps) => (
  <div
    key={name}
    className="bg-base-100 rounded-lg p-6 shadow-lg border border-base-300"
  >
    <div className="flex justify-between items-center mb-3">
      <h3 className="font-semibold text-lg">{name}</h3>
      <span className="text-sm text-base-content/60">{category}</span>
    </div>
    <div className="w-full bg-base-300 rounded-full h-2 mb-2">
      <div
        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
    <div className="text-right">
      <span className="text-sm font-medium text-primary">
        {getExpertiseFromLevel(level)}
      </span>
    </div>
  </div>
);

export default SkillCard;
