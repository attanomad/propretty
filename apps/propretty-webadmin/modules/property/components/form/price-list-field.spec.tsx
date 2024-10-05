import { Form } from "@/components/ui/form";
import { Amenity, Property, PropertyMedia } from "@/gql/graphql";
import { cleanup, render, RenderOptions, screen } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { afterEach, expect, test } from "vitest";
import { usePropertyForm } from "./form.hooks";
import PriceListField from "./price-list-field";

const formRender = (
  ui: ReactElement,
  options?: { property?: Property } & RenderOptions
) => render(<FormProvider property={options?.property}>{ui}</FormProvider>);

const FormProvider = ({
  children,
  property,
}: {
  property?: Property;
  children: ReactNode;
}) => {
  const form = usePropertyForm(property);

  return (
    <Form {...form}>
      <form>{children}</form>
    </Form>
  );
};

const mockedProperty = {
  id: "",
  type: { id: "", name: "type name" },
  mediaList: [] as PropertyMedia[],
  amenities: [] as Amenity[],
  priceList: [{ id: "", currency: "THB", price: 100 }],
} as Property;

afterEach(() => cleanup());

test("render price field without property data", async () => {
  formRender(<PriceListField />);

  const addPriceBtn = screen.getByText("Add Price");

  expect(addPriceBtn).toBeVisible();
  expect(addPriceBtn).toBeEnabled();
});

test("render price field with one price info", async () => {
  const { container } = formRender(<PriceListField />, {
    property: mockedProperty,
  });

  const addPriceBtn = screen.getByText("Add Price");

  expect(addPriceBtn).toBeVisible();
  expect(addPriceBtn).toBeEnabled();

  // expect(screen.getByText("THB")).toBeVisible();
  expect(screen.getByDisplayValue("100")).toBeVisible();
});
