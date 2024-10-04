import PublicIcon from "@mui/icons-material/Public";
import Flag from "react-world-flags";

interface CompetitionFlagIconProps {
    country?: string;
}
const CompetitionFlagIcon = ({ country }: CompetitionFlagIconProps) => {
    return country ? <Flag code={country.toLowerCase()} /> : <PublicIcon />;
};

export default CompetitionFlagIcon;