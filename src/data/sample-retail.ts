import type { Dimension, Attribute, DataSourceInfo } from "@sisense/sdk-data"

import {
  createAttribute,
  createDateDimension,
  createDimension,
} from "@sisense/sdk-data"

export const DataSource: DataSourceInfo = {
  title: "Sample Retail",
  type: "elasticube",
}

interface DimCountriesDimension extends Dimension {
  CountryName: Attribute
  Region: Attribute
}
export const DimCountries = createDimension({
  name: "DimCountries",
  CountryName: createAttribute({
    name: "CountryName",
    type: "text-attribute",
    expression: "[DimCountries.CountryName]",
  }),
  Region: createAttribute({
    name: "Region",
    type: "text-attribute",
    expression: "[DimCountries.Region]",
  }),
}) as DimCountriesDimension

interface DimCustomersDimension extends Dimension {
  CustomerID: Attribute
  StoreID: Attribute
  TerritoryID: Attribute
}
export const DimCustomers = createDimension({
  name: "DimCustomers",
  CustomerID: createAttribute({
    name: "CustomerID",
    type: "numeric-attribute",
    expression: "[DimCustomers.CustomerID]",
  }),
  StoreID: createAttribute({
    name: "StoreID",
    type: "numeric-attribute",
    expression: "[DimCustomers.StoreID]",
  }),
  TerritoryID: createAttribute({
    name: "TerritoryID",
    type: "numeric-attribute",
    expression: "[DimCustomers.TerritoryID]",
  }),
}) as DimCustomersDimension

export const DimDate = createDimension({
  name: "DimDate",
  Date: createDateDimension({
    name: "Date",
    expression: "[DimDate.Date (Calendar)]",
  }),
}) as Dimension

interface DimEmployeesDimension extends Dimension {
  EmployeeName: Attribute
  TeamID: Attribute
  TeamManger: Attribute
}
export const DimEmployees = createDimension({
  name: "DimEmployees",
  EmployeeName: createAttribute({
    name: "EmployeeName",
    type: "text-attribute",
    expression: "[DimEmployees.EmployeeName]",
  }),
  TeamID: createAttribute({
    name: "TeamID",
    type: "numeric-attribute",
    expression: "[DimEmployees.TeamID]",
  }),
  TeamManger: createAttribute({
    name: "TeamManger",
    type: "text-attribute",
    expression: "[DimEmployees.TeamManger]",
  }),
}) as DimEmployeesDimension

interface DimProductsDimension extends Dimension {
  CategoryID: Attribute
  CategoryName: Attribute
  Color: Attribute
  Price: Attribute
  ProductName: Attribute
}
export const DimProducts = createDimension({
  name: "DimProducts",
  CategoryID: createAttribute({
    name: "CategoryID",
    type: "numeric-attribute",
    expression: "[DimProducts.CategoryID]",
  }),
  CategoryName: createAttribute({
    name: "CategoryName",
    type: "text-attribute",
    expression: "[DimProducts.CategoryName]",
  }),
  Color: createAttribute({
    name: "Color",
    type: "text-attribute",
    expression: "[DimProducts.Color]",
  }),
  Price: createAttribute({
    name: "Price",
    type: "numeric-attribute",
    expression: "[DimProducts.Price]",
  }),
  ProductName: createAttribute({
    name: "ProductName",
    type: "text-attribute",
    expression: "[DimProducts.ProductName]",
  }),
}) as DimProductsDimension

interface Fact_Purchase_OrdersDimension extends Dimension {
  CountryName: Attribute
  PurchaseCost: Attribute
  PurchaseDiscount: Attribute
  PurchaseOrderID: Attribute
  PurchasePrice: Attribute
  Region: Attribute
  StockedQty: Attribute
  TerritoryID: Attribute
  VendorName: Attribute
}
export const Fact_Purchase_Orders = createDimension({
  name: "Fact_Purchase_Orders",
  CountryName: createAttribute({
    name: "CountryName",
    type: "text-attribute",
    expression: "[Fact_Purchase_Orders.CountryName]",
  }),
  PurchaseCost: createAttribute({
    name: "PurchaseCost",
    type: "numeric-attribute",
    expression: "[Fact_Purchase_Orders.PurchaseCost]",
  }),
  PurchaseDiscount: createAttribute({
    name: "PurchaseDiscount",
    type: "numeric-attribute",
    expression: "[Fact_Purchase_Orders.PurchaseDiscount]",
  }),
  PurchaseOrderID: createAttribute({
    name: "PurchaseOrderID",
    type: "numeric-attribute",
    expression: "[Fact_Purchase_Orders.PurchaseOrderID]",
  }),
  PurchasePrice: createAttribute({
    name: "PurchasePrice",
    type: "numeric-attribute",
    expression: "[Fact_Purchase_Orders.PurchasePrice]",
  }),
  Region: createAttribute({
    name: "Region",
    type: "text-attribute",
    expression: "[Fact_Purchase_Orders.Region]",
  }),
  StockedQty: createAttribute({
    name: "StockedQty",
    type: "numeric-attribute",
    expression: "[Fact_Purchase_Orders.StockedQty]",
  }),
  TerritoryID: createAttribute({
    name: "TerritoryID",
    type: "numeric-attribute",
    expression: "[Fact_Purchase_Orders.Territory ID]",
  }),
  VendorName: createAttribute({
    name: "VendorName",
    type: "text-attribute",
    expression: "[Fact_Purchase_Orders.VendorName]",
  }),
}) as Fact_Purchase_OrdersDimension

interface Fact_Sale_ordersDimension extends Dimension {
  Freight: Attribute
  OnlineOrderFlag: Attribute
  OrderQty: Attribute
  OrderRevenue: Attribute
  Region: Attribute
  SalesOrderID: Attribute
  UnitPrice: Attribute
  UnitPriceDiscount: Attribute
}
export const Fact_Sale_orders = createDimension({
  name: "Fact_Sale_orders",
  Freight: createAttribute({
    name: "Freight",
    type: "numeric-attribute",
    expression: "[Fact_Sale_orders.Freight]",
  }),
  OnlineOrderFlag: createAttribute({
    name: "OnlineOrderFlag",
    type: "text-attribute",
    expression: "[Fact_Sale_orders.OnlineOrderFlag]",
  }),
  OrderQty: createAttribute({
    name: "OrderQty",
    type: "numeric-attribute",
    expression: "[Fact_Sale_orders.OrderQty]",
  }),
  OrderRevenue: createAttribute({
    name: "OrderRevenue",
    type: "numeric-attribute",
    expression: "[Fact_Sale_orders.OrderRevenue]",
  }),
  Region: createAttribute({
    name: "Region",
    type: "text-attribute",
    expression: "[Fact_Sale_orders.Region]",
  }),
  SalesOrderID: createAttribute({
    name: "SalesOrderID",
    type: "numeric-attribute",
    expression: "[Fact_Sale_orders.SalesOrderID]",
  }),
  UnitPrice: createAttribute({
    name: "UnitPrice",
    type: "numeric-attribute",
    expression: "[Fact_Sale_orders.UnitPrice]",
  }),
  UnitPriceDiscount: createAttribute({
    name: "UnitPriceDiscount",
    type: "numeric-attribute",
    expression: "[Fact_Sale_orders.UnitPriceDiscount]",
  }),
}) as Fact_Sale_ordersDimension
