//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const ProductsTitle = () => {
  const record = useRecordContext();
  return <span>Products {record ? `"${record.name}"` : ''}</span>;
};

export const ProductsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="productId" />
      <TextField source="sku" />
      <TextField source="name" />
      <NumberField source="price" />
      <NumberField source="weight" />
      <TextField source="description" />
      <ImageField source="thumbnail" />
      <ImageField source="image" />
      <ReferenceField source="category" reference="Categories" />
      <DateField source="createDate" />
      <NumberField source="stock" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const ProductsEdit = () => (
  <Edit title={<ProductsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="productId" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="sku" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="price" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="weight" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="thumbnail" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="image" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="category" reference="Categories" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="createDate" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="stock" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const ProductsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="productId" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="sku" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="price" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="weight" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="description" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="thumbnail" />
        </Grid>
        <Grid item xs={4}>
          <ImageInput source="image" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="category" reference="Categories" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="createDate" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="stock" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  <ReferenceInput
    source="category"
    label="category"
    reference="Categories"
    alwaysOn
  />,
  ,
  ,
];
