import React from "react";
import classes from "./TopBar.module.css";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
function TopBar(props) {
  const filterItem = props.filterItem;
  const productsLength = props.productsFoundLength;

  const changeFilterHandler = () => {
    props.changeFilterState();
  };
  const changeViewHandler = (current) => {
    if (current === "grid") props.setGridView(true);
    else props.setGridView(false);
  };
  const changeSortingHandler = (event) => {
    props.setSortItem(event.target.value);
  };

  return (
    <div className={`${classes["top-bar"]} dark:bg-slate-600 dark:text-white`} >
      <div className={classes.content}>
        <div className={classes.query}>
          {filterItem !== "all" ? (
            <h4>Search For {`"${filterItem.toUpperCase()}"`}</h4>
          ) : (
            <h4>All Products </h4>
          )}
          <span>{productsLength} results found</span>
        </div>
        <div className={classes.sort}>
          <span>Sort by: </span>
          <select onChange={changeSortingHandler} name="sort" className="dark:bg-slate-700" id="sort-price">
            <option name="sort" value="none">
              None
            </option>
            <option name="sort" value="low">
              Low Price
            </option>
            <option name="sort" value="high">
              High Price
            </option>
          </select>
        </div>
        <div className={`${classes.view}`}>
          <button className="dark:bg-slate-700" onClick={() => changeViewHandler("grid")}>
            <HiOutlineViewGrid />
          </button>
          <button className="dark:bg-slate-700" onClick={() => changeViewHandler("list")}>
            <BsList />
          </button>
          <button
            onClick={changeFilterHandler}
            className={classes["filter-icon"]}
          >
            <FiFilter />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
