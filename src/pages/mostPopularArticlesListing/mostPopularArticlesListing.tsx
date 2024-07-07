import { useCallback, useState } from "react";
import { Select } from "antd";

import { Grid, Heading, Layout, StateHandler } from "../../components";
import { popularActivitiesListingBlanksSlate } from "../../blankslates";

import { ActionRenderer } from "./rendrers";
import { useGetAllPopulatArticles } from "../../services";

import { MostPopularArticlesListingStyled } from "./mostPopularArticlesListing.styles";

const dropdownOptions = [
  { value: 1, label: "Last 1 day" },
  { value: 7, label: "Last 7 days" },
  { value: 30, label: "Last 30 days" },
];

const MostPopularArticlesListing = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(1);

  const { data, isLoading, error } = useGetAllPopulatArticles(selectedPeriod);

  const onChangeSelection = useCallback((updPeriod: number) => {
    setSelectedPeriod(updPeriod);
  }, []);

  return (
    <Layout>
      <MostPopularArticlesListingStyled>
        <Heading title="Most Popular Articles" />
        <div className="sec-heading">
          <div className="period-selection-sec">
            Available periods:
            <Select
              options={dropdownOptions}
              defaultValue={selectedPeriod}
              onChange={onChangeSelection}
              data-testid="period-selection"
              optionRender={({ label, value }) => (
                <span
                  data-testid={`${label}${
                    value === selectedPeriod ? "-selected" : ""
                  }`}
                >
                  {label}
                </span>
              )}
            />
          </div>
        </div>
        <StateHandler
          isLoading={isLoading}
          error={error}
          blankSlate={popularActivitiesListingBlanksSlate}
        >
          <Grid
            columnDefs={[
              { headerName: "Title", field: "title", flex: 1 },
              { headerName: "Description", field: "abstract", flex: 1 },
              {
                headerName: "Published On",
                field: "published_date",
                maxWidth: 150,
              },
              { headerName: "Modified On", field: "updated", maxWidth: 200 },
              {
                headerName: "Action",
                field: "url",
                cellRenderer: ActionRenderer,
              },
            ]}
            rowData={data?.data?.results}
            components={{
              ActionRenderer,
            }}
          />
        </StateHandler>
      </MostPopularArticlesListingStyled>
    </Layout>
  );
};

export default MostPopularArticlesListing;
