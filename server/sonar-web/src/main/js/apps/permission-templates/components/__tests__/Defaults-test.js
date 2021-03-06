/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { shallow } from 'enzyme';
import React from 'react';
import Defaults from '../Defaults';

const SAMPLE = {
  id: 'id',
  name: 'name',
  permissions: []
};

it('should render one qualifier', () => {
  const sample = { ...SAMPLE, defaultFor: ['DEV'] };
  const output = shallow(<Defaults permissionTemplate={sample} />);
  expect(output).toMatchSnapshot();
});

it('should render several qualifiers', () => {
  const sample = { ...SAMPLE, defaultFor: ['TRK', 'VW'] };
  const output = shallow(<Defaults permissionTemplate={sample} />);
  expect(output).toMatchSnapshot();
});

it('should render several qualifiers for default organization', () => {
  const sample = { ...SAMPLE, defaultFor: ['TRK', 'VW'] };
  const organization = { isDefault: true };
  const output = shallow(<Defaults permissionTemplate={sample} organization={organization} />);
  expect(output).toMatchSnapshot();
});

it('should render only projects for custom organization', () => {
  const sample = { ...SAMPLE, defaultFor: ['TRK', 'VW'] };
  const organization = { isDefault: false };
  const output = shallow(<Defaults permissionTemplate={sample} organization={organization} />);
  expect(output).toMatchSnapshot();
});
