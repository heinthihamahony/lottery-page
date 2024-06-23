import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar, Button, ButtonGroup, Input } from "@nextui-org/react";
import {
  ArrowIcon,
  BlueMark,
  Fire,
  Schedule,
  Trophy,
  UserIcon,
} from "../icons/icons";
import { Bell, FilePenLine, FileStack, Search, Upload } from "lucide-react";
import { BitLogo } from "../logo/logo";
import Link from "next/link";

export default function CardSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-fit">
      <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {children}
      </div>
    </div>
  );
}

export function CardBar() {
  return (
    <div className="grid grid-cols-1 gap-4 p-2">
      <Card>
        <CardBody>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <Button radius="md" className="">
                <Bell />
              </Button>
              <Input
                startContent={<Search />}
                title="Search"
                placeholder="Search"
                className=" "
              />
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <Link href="" className="px-3">
                  Home
                </Link>
                <Link href="" className="px-3 border-x">
                  Lottery
                </Link>
                <Link href="" className="px-3">
                  FAQ
                </Link>
              </div>
              <div className="flex gap-3 items-center p-2 rounded-xl">
                <Avatar
                  radius="sm"
                  isBordered
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  className="w-8 h-8"
                />
                <div className=" leading-3">
                  <p className="text-xs">Reza Niromand</p>
                  <p className="text-xs">0xcD...4F</p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export function ProfileCard() {
  return (
    <Card className="col-span-3  p-4 rounded-lg">
      <CardBody className="text-center space-y-2 mb-4">
        <Avatar
          radius="md"
          isBordered
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          className="mx-auto w-20 h-20"
        />
        <h2 className="mt-2 font-bold text-sm">Reza Niromand</h2>
        <p className="text-gray-400">2022/08/23</p>
        <p className="text-sm gap-1 flex items-center justify-center">
          rezaniromand@gmail.com <BlueMark />
        </p>
      </CardBody>
      <CardFooter>
        <Button
          className="mt-2 py-2 px-4 w-full rounded-lg"
          startContent={<FilePenLine />}
        >
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

export function MyLatestDraws() {
  const DrawCard = ({
    title,
    winner,
    src,
  }: {
    title: string;
    winner: number;
    src: string;
  }) => (
    <div className=" p-2 rounded flex gap-4 items-center">
      <Avatar radius="md" isBordered src={src} />
      <div className="">
        <p className="text-sm">{title}</p>
        <p className="text-xs">Winner: {winner}</p>
      </div>
    </div>
  );
  return (
    <Card className="col-span-5 p-2 rounded-lg">
      <CardHeader className="py-2">
        <h2 className="text-xl border-l-4 border-l-[#e38120] pl-2">
          My Latest Draws
        </h2>
      </CardHeader>
      <CardBody className="space-y-px">
        <DrawCard
          title="Your Lottery Title Is Placed..."
          winner={2}
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
        <DrawCard
          title="Your Lottery Title Is Placed..."
          winner={2}
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <DrawCard
          title="Your Lottery Title Is Placed..."
          winner={2}
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
        <DrawCard
          title="Your Lottery Title Is Placed..."
          winner={2}
          src="https://i.pravatar.cc/150?u=a04258114e29026702d"
        />
      </CardBody>
    </Card>
  );
}

export function SuperCard() {
  return (
    <div className="col-span-4 grid grid-rows-2 gap-2 rounded-lg">
      <Card>
        <CardHeader>
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
              <BitLogo />
              <div className="text-sm">
                <p>Bitcoin</p>
                <p>0xD352...4dF</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button startContent={<FileStack />}></Button>
              <Button startContent={<Upload />}></Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between border rounded-lg p-4">
            <span>Wallet Balance</span>
            <span>8021$</span>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="text-center mx-auto w-2/3 space-y-2">
          <p className="text-4xl font-bold flex gap-2">
            7020000<span className="text-yellow-400">$</span>
          </p>
          <p className="text-gray-400">Withdrawal Balance</p>
          <button className=" bg-[#298afb] py-2 px-4 rounded">
            Inventory Withdrawal
          </button>
        </CardBody>
      </Card>
    </div>
  );
}

export function ColorCard() {
  const PromoCard = ({
    title,
    description,
    buttonText,
    textColor,
    bgcolor,
  }: {
    title: string;
    description: string;
    buttonText: string;
    textColor: string;
    bgcolor: any;
  }) => (
    <Card
      style={{ backgroundColor: `${bgcolor}` }}
      className="col-span-2  text-white p-4 rounded-xl shadow-lg"
    >
      <CardHeader>
        <h2 className="text-xl">{title}</h2>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <CardFooter>
        <Button
          style={{ color: `${textColor}` }}
          className=" bg-white py-2 px-4 rounded"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
  return (
    <>
      <PromoCard
        title="A Dream Chance"
        description="Participate in your own lottery and make your dreams come true"
        buttonText="Buy tickets"
        textColor="#ec4899"
        bgcolor="#ec4899"
      />

      <PromoCard
        title="Invite Your Friends"
        description="By inviting your friends on our site, earn income and increase your lottery chances"
        buttonText="Invitation link"
        textColor="#3b82f6"
        bgcolor="#3b82f6"
      />
    </>
  );
}

export function ResultCard() {
  const Lottery = ({
    title,
    count,
    icon,
    color,
  }: {
    title: string;
    count: string;
    icon: React.ReactNode;
    color: string;
  }) => (
    <Card title={title} className="p-5 shadow-lg border">
      <div className="flex items-center gap-4 ">
        {icon}
        <div>
          <p>{title}</p>
          <div className="flex items-center gap-1 ">
            <span className="text-xl font-bold" style={{ color: `${color}` }}>
              {count}
            </span>
            <p className="text-xs flex gap-1">
              View <ArrowIcon />
            </p>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <>
      <Lottery
        color="green"
        title="Active Lotteries"
        count={"07"}
        icon={<Fire />}
      />
      <Lottery
        color="blue"
        title="Performed"
        count={"42"}
        icon={<Schedule />}
      />
      <Lottery color="orange" title="My Wins" count={"20"} icon={<Trophy />} />
      <Lottery
        color="gray"
        title="My Subset"
        count={"27"}
        icon={<UserIcon />}
      />
    </>
  );
}
