import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../Map"), { ssr: false });
import ListingCategory from "./ListingCategory";

interface ListingInfoProps {
  user: SafeUser;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
}
const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="text-xl font-semibold flex flex-row items-center gap-2">
        <div>Hosted by {user?.name}</div>
        <Avatar src={user?.image} />
      </div>
      <div className="flex flex-row items-center gap-4 font-white text-neutral-500">
        <div>{guestCount} guests</div>

        <div>{roomCount} rooms</div>

        <div>{bathroomCount} bathrooms</div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <Map center={location} />
    </div>
  );
};
export default ListingInfo;
