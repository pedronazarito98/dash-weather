"use client";
import { useState } from "react";
import {
  useSensor,
  DndContext,
  useSensors,
  PointerSensor,
  closestCorners,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import * as stylex from "@stylexjs/stylex";
import { DataCards } from "@/src/lib/dataMode";
import { Card } from "../components/Card/Card";
import { TableDemo } from "../components/Table/Table";
import { BarChart } from "../components/Charts/BarChart";
import { CardGlobal } from "../components/Ui/CardGlobal";
import { LineChart } from "../components/Charts/LineChart";
import SortableItem from "../components/DnDComponents/SortableItem";
import { HalfDonutChart } from "../components/Charts/HalfDonutChart";

export default function DashboardIndex() {
  const [items, setItems] = useState(DataCards.map((card) => card.id));

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.indexOf(active.id);
        const newIndex = prevItems.indexOf(over.id);
        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <div {...stylex.props(styles.containerList)}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <div {...stylex.props(styles.wrapperList)}>
              {items.map((id) => {
                const itemFind = DataCards?.find(
                  ({ id: cardId }) => cardId === id
                );

                return (
                  <SortableItem key={id} id={id}>
                    <Card
                      icon={itemFind?.icon}
                      title={itemFind?.title}
                      value={itemFind?.value}
                      percent={itemFind?.percent}
                    />
                  </SortableItem>
                );
              })}
            </div>

            <section {...stylex.props(styles.listCharts)}>
              <CardGlobal
                title="Weight loss Goal"
                style={styles.cardFunction(400)}
              >
                <HalfDonutChart current={10} goal={20} />
              </CardGlobal>

              <CardGlobal
                title="Body Weight"
                edit
                style={styles.cardFunction(600)}
              >
                <BarChart />
              </CardGlobal>
            </section>

            <section {...stylex.props(styles.listCharts)}>
              <CardGlobal
                title="Food entries"
                edit
                style={styles.cardFunction(700)}
              >
                <TableDemo />
              </CardGlobal>

              <CardGlobal
                title="Miles Walked"
                edit
                style={styles.cardFunction(400)}
              >
                <LineChart />
              </CardGlobal>
            </section>
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
}

const styles = stylex.create({
  containerList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  wrapperList: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    gap: 16,
  },
  listCharts: {
    gap: 16,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  cardStyle: {
    padding: "8px ",
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "10px",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#212121",
  },
  cardStyle_width: (width, height) => ({
    width,
    height,
  }),
  cardFunction: (width) => ({
    width,
  }),
});
