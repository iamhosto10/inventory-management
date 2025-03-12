"use client";

import React from "react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";
import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

type Props = {};

function Dashboard({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      {/*       
      <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16"></div>
      <div className="row-span-3 xl:row-span-6 bg-[#000000] shadow-md rounded-2xl flex flex-col justify-between"></div>
      <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-amber-400 shadow-md rounded-2xl"></div>
      <div className="row-span-3 bg-red-950 shadow-md rounded-2xl flex flex-col justify-between"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-blue-950 col-span-1 shadow-md rounded-2xl flex flex-col justify-between"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-[#ac0c0c] col-span-1 shadow-md rounded-2xl flex flex-col justify-between"></div>
      <div className="md:row-span-1 xl:row-span-2 bg-orange-400 col-span-1 shadow-md rounded-2xl flex flex-col justify-between"></div> */}
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-green-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        details={[
          {
            title: "Customer Growth",
            amount: "175.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Expenses",
            amount: "10.00",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Dues & Pending Orders"
        primaryIcon={<CheckCircle className="text-green-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        details={[
          {
            title: "Dues",
            amount: "250.00",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Pending Orders",
            amount: "147",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Sales & Discount"
        primaryIcon={<Tag className="text-green-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        details={[
          {
            title: "Sales",
            amount: "1000.00",
            changePercentage: 20,
            IconComponent: TrendingUp,
          },
          {
            title: "Discount",
            amount: "200.00",
            changePercentage: -10,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
}

export default Dashboard;
