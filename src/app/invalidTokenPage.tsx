// pages/404.tsx
import * as React from 'react';
import './invalidTokenPage.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Content, Title, Form, FormGroup, Grid, GridItem, HelperText, HelperTextItem, TextInput } from '@patternfly/react-core';

const InvalidTokenPage: React.FunctionComponent = () => {

  return (
    <div className="invalid-token-page-background">
      <Grid hasGutter span={12}>
        <GridItem span={6} className="invalid-text-container">
          <Title headingLevel='h1' size='4xl' className="title">
            401 Error
          </Title>
          <Content>
            <Content component="p" className="invalid-text">
              Your GitHub token is invalid.
            </Content>
          </Content>
          <Button variant="primary" size='lg' >
            Return to login page
          </Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default InvalidTokenPage;

// also make it redirect to the login page