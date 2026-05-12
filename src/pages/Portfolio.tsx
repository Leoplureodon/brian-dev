import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type Item = {
  id: string;
  value: string;
};

type Mode = "single" | "bulk";

function Portfolio() {
  const [mode, setMode] = useState<Mode>("single");
  const [singleValue, setSingleValue] = useState<string>("");
  const [csvText, setCsvText] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  const [bulkMessage, setBulkMessage] = useState<string>("");

  const handleSingleAdd = (): void => {
    const trimmed = singleValue.trim();

    if (!trimmed) {
      return;
    }

    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        value: trimmed,
      },
    ]);

    setSingleValue("");
  };

  const handleBulkAdd = (): void => {
    const rows = csvText
      .split(/\r?\n/)
      .map((row) => row.trim())
      .filter(Boolean);

    if (rows.length === 0) {
      setBulkMessage("No valid rows found in CSV input.");
      return;
    }

    const parsedItems: Item[] = rows.map((row) => ({
      id: crypto.randomUUID(),
      value: row,
    }));

    setItems((prev) => [...prev, ...parsedItems]);
    setBulkMessage(`${parsedItems.length} item(s) added successfully.`);
    setCsvText("");
  };

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Add Items
      </Typography>

      <Typography>
        Toggle between adding a single item or importing items in bulk using CSV
        data.
      </Typography>

      <br />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Card
          elevation={2}
          sx={{
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Stack spacing={3}>
              <RadioGroup
                row
                value={mode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setMode(event.target.value as Mode);
                  setBulkMessage("");
                }}
              >
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single Item"
                />

                <FormControlLabel
                  value="bulk"
                  control={<Radio />}
                  label="Bulk Import"
                />
              </RadioGroup>

              {mode === "single" && (
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ alignItems: "stretch" }}
                >
                  <TextField
                    fullWidth
                    label="Item Name"
                    placeholder="Enter an item"
                    value={singleValue}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setSingleValue(event.target.value);
                    }}
                  />

                  <Button
                    variant="contained"
                    onClick={handleSingleAdd}
                    sx={{
                      minWidth: 140,
                      backgroundColor: "#2e7d32",
                      "&:hover": {
                        backgroundColor: "#1b5e20",
                      },
                    }}
                  >
                    Add
                  </Button>
                </Stack>
              )}

              {mode === "bulk" && (
                <Stack spacing={2}>
                  <TextField
                    multiline
                    minRows={8}
                    fullWidth
                    label="CSV Input"
                    placeholder={["apple", "banana", "orange"].join("\n")}
                    value={csvText}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setCsvText(event.target.value);
                    }}
                    helperText="One item per line for this example."
                  />

                  <Box>
                    <Button variant="contained" onClick={handleBulkAdd}>
                      Import CSV
                    </Button>
                  </Box>

                  {bulkMessage && (
                    <Alert severity="success">{bulkMessage}</Alert>
                  )}
                </Stack>
              )}
            </Stack>
          </CardContent>
        </Card>

        <Card
          elevation={1}
          sx={{
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Added Items
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {items.length === 0 ? (
              <Typography color="text.secondary">
                No items added yet.
              </Typography>
            ) : (
              <List>
                {items.map((item) => (
                  <ListItem key={item.id} disablePadding>
                    <ListItemText primary={item.value} />
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Portfolio;
